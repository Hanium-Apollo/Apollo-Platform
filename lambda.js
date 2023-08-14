const AWS = require("aws-sdk");
const AdmZip = require("adm-zip");
const s3 = new AWS.S3();

exports.handler = async (event) => {
  const jobId = event["CodePipeline.job"].id;
  const cp = new AWS.CodePipeline();

  try {
    const inputArtifact = event["CodePipeline.job"].data.inputArtifacts[0];
    const bucket = inputArtifact.location.s3Location.bucketName;
    const key = inputArtifact.location.s3Location.objectKey;

    const getObjectResponse = await s3
      .getObject({ Bucket: bucket, Key: key })
      .promise();

    const zip = new AdmZip(getObjectResponse.Body);
    const unzippedEntries = zip.getEntries();

    for (const entry of unzippedEntries) {
      if (!entry.isDirectory) {
        const unzippedContent = entry.getData();
        await s3
          .putObject({
            Bucket: bucket,
            Key: `${key}/${entry.entryName}`,
            Body: unzippedContent,
            ContentType: "application/octet-stream",
          })
          .promise();
      }
    }

    await cp.putJobSuccessResult({ jobId }).promise();
    return { statusCode: 200 };
  } catch (error) {
    console.error("Error during decompression:", error);
    await cp
      .putJobFailureResult({
        jobId,
        failureDetails: {
          message: JSON.stringify(error),
          type: "JobFailed",
        },
      })
      .promise();
    throw error;
  }
};

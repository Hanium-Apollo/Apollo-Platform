import boto3
import zipfile
import io

codepipeline = boto3.client('codepipeline')
s3 = boto3.client('s3')

def lambda_handler(event, context):
    jobId = event['CodePipeline.job']['id']

    try:
        inputArtifact = event['CodePipeline.job']['data']['inputArtifacts'][0]
        bucket = inputArtifact['location']['s3Location']['bucketName']
        key = inputArtifact['location']['s3Location']['objectKey']

        getObjectResponse = s3.get_object(Bucket=bucket, Key=key)
        with io.BytesIO(getObjectResponse['Body'].read()) as zip_data:
            with zipfile.ZipFile(zip_data) as archive:
                for entry in archive.infolist():
                    if not entry.is_dir():
                        with archive.open(entry) as file:
                            s3.put_object(
                                Bucket=bucket,
                                Key=f"{key}/{entry.filename}",
                                Body=file.read(),
                                ContentType='application/octet-stream'
                            )

        codepipeline.put_job_success_result(jobId=jobId)
        return {'statusCode': 200}
    except Exception as error:
        print(f"Error during decompression: {error}")
        codepipeline.put_job_failure_result(
            jobId=jobId,
            failureDetails={
                'message': str(error),
                'type': 'JobFailed'
            }
        )
        raise error

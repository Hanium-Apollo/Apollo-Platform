const AWS = require("aws-sdk");
const ecs = new AWS.ECS();
const codedeploy = new AWS.CodeDeploy();

exports.handler = async (event) => {
  const deploymentId = event.DeploymentId;
  const lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId;

  const params = {
    cluster: "Apollo-Server-Cluster",
    service: "Apollo-Server-Service",
    forceNewDeployment: true,
  };

  try {
    const data = await ecs.updateService(params).promise();
    console.log("Service updated successfully", data);

    await notifyCodeDEploySuccess(deploymentId, lifecycleEventHookExecutionId);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log("Error", err);

    await notifyCodeDeployFailure(deploymentId, lifecycleEventHookExecutionId);

    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};

async function notifyCodeDeploySuccess(
  deploymentId,
  lifecycleEventHookExecutionId
) {
  const params = {
    deploymentId: deploymentId,
    lifecycleEventHookExecutionId: lifecycleEventHookExecutionId,
    status: "Succeeded",
  };
  return codedeploy.putLifecycleEventHookExecutionStatus(params).promise();
}

async function notifyCodeDeployFailure(
  deploymentId,
  lifecycleEventHookExecutionId
) {
  const params = {
    deploymentId: deploymentId,
    lifecycleEventHookExecutionId: lifecycleEventHookExecutionId,
    status: "Failed",
  };
  return codedeploy.putLifecycleEventHookExecutionStatus(params).promise();
}

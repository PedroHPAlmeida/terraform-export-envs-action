const core = require('@actions/core');

try {
    const tfVariablesInput = core.getInput('tf_variables');
    const tfVariables = JSON.parse(tfVariablesInput);
   
    Object.keys(tfVariables).forEach(key => {
        process.env[`TF_${key}`] = tfVariables[key];
        console.log(process.env[`TF_${key}`])
    })
} catch (error) {
    core.setFailed(error.message);
}

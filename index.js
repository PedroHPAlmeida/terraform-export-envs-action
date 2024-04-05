const core = require('@actions/core');

try {
    const tfVariablesInput = core.getInput('tf_variables');
    const tfVariables = JSON.parse(tfVariablesInput);

    Object.keys(tfVariables).forEach(key => {
        process.env[key] = `TF_${tfVariables[key].toUpperCase()}`;
        console.log(process.env[`TF_${tfVariables[key].toUpperCase()}`])
    })
} catch (error) {
    core.setFailed(error.message);
}

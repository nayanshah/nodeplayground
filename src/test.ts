import { exec, execFile, execSync } from 'child_process';
import { path as binPath } from 'phantomjs-prebuilt';


const logExecResult = (error, stdout, stderr) => {
    console.log(stdout);

    if (stderr) {
        console.error("StdErr:" + stderr);
    }

    if (error) {
        console.error(error);
    }
};

switch (process.argv[2]) 
{
    case 'exec':
        console.log('Calling exec ' + binPath);
        exec(binPath + ' -v', logExecResult);
        break;
    case 'execFile':
    default:
        console.log('Calling execFile ' + binPath);
        execFile(binPath, ['-v'], logExecResult);
}

# How to run HyperExecute k6 Sample?

k6 is an open-source tool designed to make load testing easy and accessible for developers and QA engineers. It's specifically built for testing the performance of APIs, microservices, and websites.

## Prerequisites
To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](https://www.lambdatest.com/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](https://www.lambdatest.com/support/docs/hyperexecute-yaml-parameters/) file which contains all the necessary instructions.
- [HyperExecute CLI](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .

## Step 1: Downlaod the HyperExecute CLI

You can download the `HyperExecute CLI` for your OS from the links given below. The CLI should be kept in the root folder of your test suite.

| Platform | Download Link |
| ---------| ------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

## Step 2: Configure your YAML file

You will have to add these flags mandatorily in your YAML file to execute the k6 tests:

- [runtime flag](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) to download and install the k6 of that respective version.

```yaml
runtime:
    addons:
      - name: k6
        version: "v0.52.0"
```

- [env flag](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#env) is used to install certain dependencies to run your test cases

```yaml
env: 
  K6_BROWSER_ENABLED: true  #Indicates whether browser emulation is enabled for the k6 test.
  K6_BROWSER_HEADLESS: false #Determines if the browser should run in headless mode
  HE_CONTEXT_K6_SETUP_DEFAULT_BROWSER_PATH: true
```

## Step 3: Execute your Test Suite

> **NOTE:** In case of macOS, if you get a permission denied warning while executing CLI, simply run `chmod u+x ./hyperexecute` to allow permission. In case you get a security popup, allow it from your **System Preferences → Security & Privacy → General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --user YOUR_USERNAME --key YOUR_ACCESS_KEY --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

# How to run HyperExecute k6 Sample? — TestMu AI (Formerly LambdaTest)

k6 is an open-source tool designed to make load testing easy and accessible for developers and QA engineers. It's specifically built for testing the performance of APIs, microservices, and websites.

## Prerequisites
To run the Tests on HyperExecute from your Local System, you are required:

- Your TestMu AI [Username and Access key](https://www.testmuai.com/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](https://www.testmuai.com/support/docs/hyperexecute-yaml-parameters/) file which contains all the necessary instructions.
- [HyperExecute CLI](https://www.testmuai.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .

## Step 1: Downlaod the HyperExecute CLI

You can download the `HyperExecute CLI` for your OS from the links given below. The CLI should be kept in the root folder of your test suite.

| Platform | Download Link |
| ---------| ------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

## Step 2: Configure your YAML file

You will have to add these flags mandatorily in your YAML file to execute the k6 tests:

- [runtime flag](https://www.testmuai.com/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) to download and install the k6 of that respective version.

```yaml
runtime:
    addons:
      - name: k6
        version: "v0.52.0"
```

- [env flag](https://www.testmuai.com/support/docs/deep-dive-into-hyperexecute-yaml/#env) is used to install certain dependencies to run your test cases

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

## 🚀 LambdaTest is Now TestMu AI

👋 Welcome to TestMu AI, the next evolution of LambdaTest. As of January 2026, [LambdaTest is Now TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/) - we have evolved from a cross-browser testing cloud into a unified, AI-native quality engineering platform designed for the modern DevOps era.

Whether you have been part of the LambdaTest community for years or are just discovering TestMu AI, our mission remains the same: to help you ship faster with high-scale test execution, autonomous testing, and deep quality analytics.

**🔄 Our Rebrand Journey**

We chose the name TestMu AI to reflect our shift towards intelligent, autonomous testing. While our identity has changed, our core technology and commitment to the testing community stay the same.

👉 Find [LambdaTest's New Home](https://www.testmuai.com/).

**🔭 Explore TestMu AI**

The same infrastructure LambdaTest customers relied on, now delivered through autonomous AI agents.

- [KaneAI](https://www.testmuai.com/kane-ai/)
- [Agent-to-Agent Testing](https://www.testmuai.com/agent-to-agent-testing/)
- [HyperExecute](https://www.testmuai.com/hyperexecute/)
- [Real Device Cloud](https://www.testmuai.com/real-device-cloud/)
- [Pricing](https://www.testmuai.com/pricing/)
- [Documentation](https://www.testmuai.com/support/docs/)
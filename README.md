
<div id="top"></div>

<!-- PROJECT LOGO -->

<br />

<div align="center">

<a href="https://www.platosolutions.io/">

<img src="https://i.ibb.co/w4v9g9d/Plato-Logo.png" alt="Logo" />

</a>

<h3 align="center">ScandiPWA & Storybook plugin</h3>

<p align="center">

A plugin that makes your ScandiPWA based project compatible with Jest testing framework

<br />

</div>

<!-- TABLE OF CONTENTS -->

<details>

<summary>Table of Contents</summary>

<ol>

<li>

<a href="#getting-started">Getting Started</a>

<ul>

<li><a href="#prerequisites">Prerequisites</a></li>

<li><a href="#installation">Installation</a></li>

</ul>

</li>

<li>

<a href="#testing-the-plugin">Testing the plugin</a>

<ul>

<li><a href="#functional">Functional</a></li>

<li><a href="#component">Component</a></li>

</ul>


</li>

<li><a href="#contributing">Contributing</a></li>

<li><a href="#acknowledgments">Acknowledgments</a></li>

</ol>

</details>

<!-- GETTING STARTED -->

##  Getting Started

The following plugin allows to make your project created on ScandiPWA platform compatible with Jest testing framework.

By default ScandiPWA is not compatible with Jest, and trying to run a siple test case will throw you a bunch of errors.

By installing this plugin, your project will be adjusted with all the necessary configuration files. The files are not affecting your project sources and not changing anything.

Changes including two parts:
* Generating config files
* Generating mocks for unresolving functions

You can expand the configuration as it become necessary during the work.


###  Prerequisites

Before installing the plugin, make sure, the project you're going to pump, has the following:

* NodeJS v14+;

```sh

node -v // --> example: v14.17.6
```

* The project is a ScandiPWA based

###  Installation

1. Navigate to the project root directory

2. Run an installation script

```sh

npx scandipwa-jest
```
3. After the installation is finished, add a script to your package.json file (e.g. `"test": "jest"`)
> Jest should be already a part of your project, as it is installed along with your ScandiPWA based project initialization. If it is missing in your dependancies for some reason, install it with the following command: `npm install --save-dev jest`

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

##  Testing the plugin

With this plugin installed, you are able to apply different types of testing.

#### Functional
This type of testing involves and allows users to test internal as well as external functions used in the project.

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a `sum.js` file:

```sh
export function sum(a, b) {
    return a + b;
}
```

Then, create a file named `sum.test.js`. This will contain our actual test:

```sh
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

And it should result to you with passing test:

![Functional Test Screenshot][functional-test-screenshot]

#### Component

This type of testing assumes and allows users to test React components, both standard, which can be obtained from the `SourceComponent/*` location, and customly created, located in your `/src` directory.

Assume, you have a `Button` component created, which `render()` method has the following content:

```sh
return (
    <button
        { ...props }
        block="Button"
    >
        { children }
    </button>
);
```

Create a file named `Button.test.js` which will contain a testing logic for a component:

```sh
import * as React from "react";
import { render } from "@testing-library/react";
import Button from "../src/component/Button";

describe("Button Component", () => {
  it("Button renders the right text", () => {
    const testLabel = "Test Label";
    const { getByText } = render(<Button>{testLabel}</Button>);

    const button = getByText(testLabel);

    expect(button.textContent).toBe(testLabel);
  });
});

```

And you should have component test passing:

![Component Test Screenshot][component-test-screenshot]


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

##  Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".


1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

##  Acknowledgments

This might be helpful for you:

* [ScandiPWA docs](https://docs.scandipwa.com/)

* [Jest docs](https://jestjs.io/docs/getting-started)

* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- IMAGES LIST -->

[functional-test-screenshot]: images/functional-test.png
[component-test-screenshot]: images/component-test.png

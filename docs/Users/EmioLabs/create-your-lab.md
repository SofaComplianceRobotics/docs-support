---
title: Create Your Own Lab
sidebar_position: 3
---

import emio_labs_directory from './img/emio-labs-directory.png'
import emio_labs_dashboard from './img/emio-labs-dashboard.png'
import emio_labs_quizopen from './img/emio-labs-quizopen.png'
import emio_labs_quizopenanswer from './img/emio-labs-quizopenanswer.png'
import emio_labs_qcm01 from './img/emio-labs-qcm01.png'
import emio_labs_qcm02 from './img/emio-labs-qcm02.png'
import emio_labs_qcm03 from './img/emio-labs-qcm03.png'
import emio_labs_input from './img/emio-labs-input.png'

# Create Your Own Lab

Learn how to create your own labs for the **Emio Labs** application.

## Setup

### Lab Architecture
:::tip
For a quickstart, have a look at the [Emio.lab_empty](https://github.com/SofaComplianceRobotics/Emio.lab_empty) GitHub repository to see an example of a lab that you can use as a template to create your own lab.
:::

The content of the **Emio Labs** application can be easily adjusted or completely changed. 
By following this documentation you’ll be able to modify the labs and create your own content.

A valid lab is a directory contianing:
- a main [Markdown](https://en.wikipedia.org/wiki/Markdown) file that can include other markdown files
- a `lab.json` file containing metadata about the lab (e.g., its title)

The `lab.json` needs to provide:

- the **name** of the directory containing your `.md` file
- the **filename** of the `.md` file (if different than the directory name)
- a **title** and a **description** to display in the main Table of Contents

For example:

```json title="/assets/labs/mylab/lab.json"
{
    "name": "mylab",
    "title": "My Lab",
    "description": "discover my lab",
    "url": "https://github.com/URL_TO_MY_LAB_REPOSITORY",
}
```

The lab directory usually contains at least one `.py` file, implementing a simulation scene for SOFA. This simulation will typically be launched when clicking the SOFA button <img className="drop-shadow" src="/img/logo_sofa.png" alt="sofa-icon" style={{borderRadius:0,width:20}}/> in the exercise sections of the lab. These directories might also contain extra files needed for the lab, like parameters file or python scripts.

<img className="centered" src={emio_labs_directory} width="20%" alt="Hierarchy of files for a lab"/>
<figcaption>Markdown and python files of the introduction lab.</figcaption>

### Render my Lab Into Emio Labs
In order to see the lab into Emio Labs, it needs to be located in the directory `path/to/home/emio-labs/VERSION/assets/labs/LAB_DIR_NAME`. You can add a copy of your lab using the __Lab Configurator__. You will then be able to see how it renders in the app.

<img className="centered" src={emio_labs_dashboard} width="70%" alt="Example of a table of contents for the Emio Labs application"/>
<figcaption>The main table of contents of the Emio Labs application shows the labs content of the application.</figcaption>

### Add Python packages
If you want to install additional Python packages for your lab, follow the steps in [this section](../emio-labs-user-manual#install-python-packages-for-emio-labs).

## Write Your Own Lab in Markdown

Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats.
We use it to write our labs and the Markdown files are rendered by the application and displayed in a user-friendly way.

Here we describe the basic syntax of Markdown and the extended syntax that we use in the **Emio Labs** application.

:::tip
The [Emio.lab_empty](https://github.com/SofaComplianceRobotics/Emio.lab_empty) lab gives a usage example of all the syntax explained below.
:::

### Basic Syntax

The basic syntax is the same as the [CommonMark specifications](https://commonmark.org/help/).
All markdown applications use this syntax.

| **Element** | **Markdown Syntax** |
| --- | --- |
| Heading | # H1<br/> ## H2<br/> ### H3 |
| Bold | \*\*bold text\*\* |
| Italic | \*italicized text\* |
| Block-quote | > block-quote |
| Ordered List | 1. First item <br/> 2. Second item <br/>3. Third item |
| Unordered List | - First item<br/>- Second item<br/>- Third item |
| Code | \`code\`<br/> \`\`\`languageblock<br/>code<br/>\`\`\` |
| Horizontal Rule | ```---``` |
| Link | ```[title](https://www.example.com)``` |
| Image | ```![alt text](image.jpg)``` |

### Extended Syntax
We also added extensions to the original Markdown to ease the making of labs.

These elements extend the basic syntax by adding additional features. It will only be understood by this application.

We use nested fenced block principle to define our custom blocks. A block fence is a sequence of at least three consecutive `:`. The content of the fenced block consists of all subsequent lines, until a closing block fence with at least as many `:` as the opening block fence.

If you want to nest multiple fenced blocks, the parent block fence should have more `:` than the children. For example :

```markdown
:::: parent
::: child
MY_CONTENT
::: <-- end of child
:::: <-- end of parent
```

#### Quiz

You can create a quiz with **open answer** or a **multiple choice question**. For an open answer, create a block fence with the keyword `quiz`. Inside the quiz fence block, create another block fence with the keyword `question`, followed by your question (on the same line) and the answer on the next line, inside the block fence. For example : 

```markdown
:::: quiz 
::: question What are the advantages of using beam models, compared to volume models? 
Beam models simplify calculations compared to full three-dimensional models, reducing computation time and resources needed. They are widely used in many civil and mechanical engineering applications, facilitating the analysis and design of structures such as bridges and buildings. In our case, beam models are well-suited to predict the behavior of a continuum robot, especially when the model is used for control purposes. 
::: 
::::
```

This will give the following :

<img className="centered" src={emio_labs_quizopen} width="70%" alt="Example of a rendered open-ended question"/>
<figcaption>Question with an open answer.</figcaption>

<img className="centered" src={emio_labs_quizopenanswer} width="70%" alt="Example of the correct answer displayed once the answer has been submitted"/>
<figcaption>After giving an answer and clicking on the `Submit` button.</figcaption>

For a question with multiple choices, create a block fence with the keyword `quiz`. Inside the quiz fence block, create another block fence with the keyword `question`, followed by your question (on the same line) and the list of possible answers in the next lines, inside the block fence. The good answers are set with `[X]` and the wrong answers with `[]` . For example : 

```markdown
:::: quiz 
::: question Which model is the best suited for the blue leg?
- [X] Cosserat
- [ ] Volume
- [X] Beam
:::
::::
```

This will give the following :

<img className="centered" src={emio_labs_qcm01} width="70%" alt="Example of a rendered multiple choice question"/>
<figcaption>Question with multiple choice question.</figcaption>

<img className="centered" src={emio_labs_qcm03} width="70%" alt="Example of a multiple choice question with selected answers"/>
<figcaption>When selected the answer.</figcaption>

<img className="centered" src={emio_labs_qcm02} width="70%" alt="Example of a multiple choice question after submission. The correct answers are highlighted in green, the wrong one in red."/>
<figcaption>After submitting the answer.</figcaption>

#### Video

You can add videos by using the following container :

```markdown
#main-video("PATH_OR_URL_TO_MY_VIDEO")
#video("PATH_OR_URL_TO_MY_VIDEO")
```

The `main-video` will move to the bottom right corner of the application when scrolling down. Only one `main-video` should be used in a lab (including main and other markdown files).

#### Highlighted block

You can highlight some text by using the following block fence with the keyword `highlight` :

```markdown
::: highlight
MY_CONTENT
:::
```

#### Exercise Block

You can highlight your exercises by using the following block fence with the keyword `exercise` :

```markdown
::: exercise
MY_EXERCISE_CONTENT
:::
```

#### Collapsible Block

Create collapsible section with the following block fence with the keyword `collapse` :

```markdown
::: collapse MY_TITLE
MY_CONTENT
:::
```

#### Select Block

Create select content with the following block fence with the keyword `select`. 
Inside the select block, you can define options with the keyword `option` followed by the value for the option. Each option should have a unique value.
You can optionally add a label to the option by using the syntax `[MY_LABEL]`For example:

```markdown
:::: select MY_UNIQUE_SELECT_NAME
::: option MY_OPTION_VALUE_1 [MY_LABEL_1]
::: option MY_OPTION_VALUE_2 
::: option MY_OPTION_VALUE_3 [MY_LABEL_3]
::::
```

You may have as many options as you want.

#### Text Input
You can add an text input field with: 

```markdown
#input("MY_UNIQUE_INPUT_NAME", "MY_OPTIONAL_PLACEHOLDER", "MY_OPTIONAL_DEFAULT_VALUE")
```

For example:

```markdown
#input("customleg") // no placeholder and no default value
#input("customleg", "leg name") // with placeholder
#input("customleg", "leg name", "blueleg") // with placeholder and default value
#input("customleg", "", "blueleg") // no placeholder and default value
```

<img className="centered" src={emio_labs_input} width="40%" alt="Example of an input field with the placeholder and a value."/>
<figcaption>Input example. (left) Placeholder. (right) Value.</figcaption>

#### Buttons

There are three types of buttons available :

1. __The SOFA button__ will launch a SOFA simulation with the specified scene file `MY_SCENE.py`. You can pass as many arguments as you want to the scene file:
    ```markdown
    #runsofa-button("MY_SCENE.py", "MY_ARGUMENT_1", "MY_ARGUMENT_2")
    ```
2. __The Python button__ will run a python script `MY_SCRIPT.py`. You can optionally provide a path to additional python modules that will be added to the `PYTHONPATH` before running the script.
    ```markdown
    #python-button("MY_SCRIPT.py", "OPTIONAL_PATH_TO_PYTHON_MODULES")
    ```
3. __The Open button__ will open a file `MY_FILE` with the default application associated with the file type on your system.
    ```markdown
    #open-button("MY_FILE")
    ```

An argument can be a value of a [`select block`](#select-block) or an [`input`](#text-input) field, by using its unique name that you defined. For example:

```markdown
#runsofa-button("MY_SCENE.py", "MY_UNIQUE_SELECT_OR_INPUT_NAME", "MY_ARGUMENT_2")
```

#### Icons
We use the icon library [font awesome](https://fontawesome.com/icons). You can browse and copy the name of a free icon to put into the Markdown command:

```markdown
#icon("ICON_NAME")
```

For example:
```markdown
#icon("warning") <-- will display a warning icon
```


## Share Your Labs

We can help you design and share your own labs with the community. Just send us an email at this address [contact@compliance-robotics.com](mailto:contact@compliance-robotics.com), explaining us your project and your needs.

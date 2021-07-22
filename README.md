# Phebi Open Charting - Example 1

## 1. How Reports work

In Phebi, a report is a set of defined report elements.. In order to create a custom report in Phebi, we have to create a report element that then is referred to in a report definition file.

## 2. Report Definition

The report definition is quite simple. It mainly consists of rows, columns and elements. It will also need a title and a thumbnail image. There are a number of default report elements that can be configured through a set of settings.

A more detailed tutorial how to define reports can be found [here](https://github.com/Phebi-AI/report-definitions).

## 3. HTML

A custom report element runs in the portal in an iframe, giving the programmer complete control of the chart. Phebi will always reference to index.html, so we start by creating that.

index.html
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
</head>
<body>
</body>
</html>
```

## 4. Phebi Scripts

To align with the Phebi Portal UI, there are two important scripts that can be referenced. 

```
<link rel="stylesheet" type="text/css" href="/core/Core.css" />
<link rel="stylesheet" type="text/css" href="/defaults/Colors.css" />
```

The Core.css applies basic styling, like font-family etc. 
The Colors.css contains default variables of colors and designs used.

To design a white box how it's commonly used in the Phebi Portal you can reference the following variables:

```
<style type="text/css">
  .Box {
    background-color: var(--background2);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
  }
</style>
```

For a full list of available styling variables, check out the [Colors.css](https://dev.phebi.ai/defaults/Colors.css) file.

## 5. Receiving charting data

When the report is loaded, Phebi will call "Render" on window level. It will two arguments, "data" and "definition". 
The data comes an array of values how they have been defined in the report definition. The definition is a copy of the report definition, passing settings like dimensions etc. etc.
For more detail on how the values and settings are defined check out how [elements are defined withing the report definition](https://github.com/Phebi-AI/report-definitions#elements)

index.html
```

```

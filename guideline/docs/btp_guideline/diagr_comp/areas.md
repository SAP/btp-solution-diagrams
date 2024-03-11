---
sidebar_label: 'Areas'
sidebar_position: 2
tags:
  - Molecules
  - Areas
  - Area Colors
  - Nesting
---

# Areas

*You will find the associated draw.io library in the  [GitHub repo](https://github.com/SAP/btp-solution-diagrams/tree/main/assets/shape-libraries-and-editable-presets/draw.io)*

## Area Types

Blue is the standard, grey for non-sap elements and the Accent colors are for highlighting certain areas.
It is not recommended to use the colors too heavily, they can overpower the diagram.
The picture shows the recommended rough proportional usage of colors in BTP Solution diagrams.
A fixed corner radius of 16 pixels is recommended.
For more details please check tool specifications for draw.io and PowerPoint.

![areas](../../pics/areas.png)

## Primary Colors for Areas

| SAP L0 Outline   | SAP L0 Fill   | Non-SAP L0 <br />  Outline | Non-SAP L0 <br /> Fill | Text |  |
|:-:|:-:|:-:|:-:|:-:|:-:|
|![BTP Border](../../pics/table_pics/0070F2.png)| ![BTP Fill](../../pics/table_pics/EBF8FF.png)|![Non-SAP Border](../../pics/table_pics/475E75.png) | ![Non-SAP Border](../../pics/table_pics/F5F6F7.png)|![Non-SAP Border](../../pics/table_pics/1D2D3E.png) | ![Non-SAP Border](../../pics/table_pics/556B82.png)|
|``` #0070F2 ```| ``` #EBF8FF ```| ``` #475E75 ```|``` #F5F6F7 ``` | ``` #1D2D3E ```| ``` #556B82 ```|

## Accent/Emphasized Colors for Areas

| Teal Outline  | Teal Fill   | Indigo Outline | Indigo Fill | Pink Outline  | Pink Fill |
|:-:|:-:|:-:|:-:|:-:|:-:|
|![BTP Border](../../pics/table_pics/07838F.png)| ![BTP Fill](../../pics/table_pics/DAFDF5.png)|![Non-SAP Border](../../pics/table_pics/5D36FF.png) | ![Non-SAP Border](../../pics/table_pics/F1ECFF.png)|![Non-SAP Border](../../pics/table_pics/CC00DC.png) | ![Non-SAP Border](../../pics/table_pics/FFF0FA.png)|
|``` #07838F ```| ``` #DAFDF5 ```| ``` #5D36FF ```|``` #F1ECFF ``` | ``` #CC00DC ```| ``` #FFF0FA ```|


## Area Cardinality

Areas can be shown as stacked to display multiple grouped layers or items. 
The style should not be changed in order to keep diagrams consistent.

<div className="area_cardinality">
![areas](../../pics/area_cardinality.png)
</div>


## Area Nesting

When nesting different areas inside each other, you should alternate between using a fill and not using a fill to provide sufficient contrast between the areas.

![areas](../../pics/area_nesting.png)

## Adding Content to Areas and Creating Hierarchies

When nesting different areas inside each other, you should alternate between using a fill and not using a fill to provide sufficient contrast between the areas. The parent layer is usually the BTP layer. 

![areas](../../pics/area_nesting_content.png)

***Blue texts are just descriptions here.***

## SeinLanguage Script Visualization

This is an interactive 3 dimensional visualition of every Seinfeld script. The language from every script is represented as a point in this space. Similar episodes occupy similar regions of the space, whereas disimilar episodes are further apart in the space. The points are color coded by their IMDb ratings. 

Formally, I built a word x document matrix that contained the counts of every word from every episode. I transformed the counts of that matrix using tf-idf and applied Principal Components Analysis (PCA) to reduce the 19357 dimensional space (one dimension for each unique word across all scripts) into just three dimensions.

Click the image below to explore the visualization yourself:

<br>

[<img src="https://raw.githubusercontent.com/cookm346/SeinLanguageSpace/master/image.png">](http://www.numbermunch.com/SeinSpace/)

<br>
<br>
<br>
<br>
<br>
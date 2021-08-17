# articlesCollection

The goal of this project is to create a solution that crawls for articles from the Guardians news website, cleanses the response, stores it in a mongo database specialy in MongoDB Atlas, then makes it available to search via an API using a web page.

## author

hello my name is Khalil LAATIRIS, 
Currently student in secende year master degree in Big Data && Cloud Computing
i'm 23 years old,

## project content 

* Crawling data 
* Store data
* Get data by API
---
## Crawling data
the first objectif is to collect data from the web site
### Requirement
* [Scrapy Framework](http://scrapy.org/)
* Cnderstanding the article web architecture in the source page 

### Realisation 
* Select and Create our fields needed in the project using a python class extende dorm scrapy [items](./items.py)
in our cas we use sex field :
..* headline : indicate the title of article
..* subject : generale title that include more than one article
..* link : the link of the article collected
..* image : the image of the article
..* author : who write the article
..* date_time : time status when the article is published
..* Indicate the xpath or using css scheema to get to the right element in the web site, created in [spiders](./spiders/).
In our case the main page thasen't include all these information, then we need to get into every article in the main page 
we loop in the page to get article's link, then get into it to extract the data. look in [article spider](./spiders/Article.py).
---
## Store data
To store data we need a database, that chosen is [mongoDB Atlas](https://www.mongodb.com/cloud/atlas) in the cloud.
the
---
## Get data by API







crawling data from [the Guardians web site ](https://www.theguardian.com/) 
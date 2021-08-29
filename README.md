# articlesCollection

The goal of this project is to create a solution that crawls for articles from the Guardians news website, cleanses the response, stores it in a mongo database specialy in MongoDB Atlas, then makes it available to search via an API using a web page.

## author

hello my name is Khalil LAATIRIS, i'm 23 years old,Currently student in secende year master degree in Big Data && Cloud Computing.

Greate thanks to gemographie hiring team to set this type of project.
I enjoyed coding this project because it use all news technologie for me wherever i am using python and mongoDB. i learned about rest API well, and get familier with scrapy framework for the first time.

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

* Select and Create our fields needed in the project using a python class extende dorm scrapy [items](./articleCollection/items.py)
in our cas we use sex field :
	* headline : indicate the title of article
	* subject : generale title that include more than one article
	* link : the link of the article collected
	* image : the image of the article
	* author : who write the article
	* date_time : time status when the article is published
* Indicate the xpath or using css scheema to get to the right element in the web site, created in [spiders](./articleCollection/spiders/).
In our case the main page thasen't include all these information, then we need to get into every article in the main page 
we loop in the page to get article's link, then get into it to extract the data. look in [article spider](./articleCollection/spiders/Article.py).
---
## Store data
* To store data we need a database, that chosen is [mongoDB Atlas](https://www.mongodb.com/cloud/atlas) in the cloud.
the scrapy framework print the data crawled in the console, and  to redirect the data we need to modify the [piplines file](./articleCollection/piplines.py) and use the [pymongo](https://pymongo.readthedocs.io/en/stable/) module to insert the data in mongoDB.
the collection and mongoDB database information are declared in [settings file](./articleCollection/settings.py).
---
## Get data by API
in this project we use the default API of `MongoDB Realm` in `3rd party service` and he code used is in the [file](./Code-mongoDB-API.js).

in our [web page](./index.html) we use the function fetch to get the data

## Bonus
the web page offer a search button on look up for a specific article in database ,
it send a request with option to serch by headline or subject, date_time and author are not desponible for the now !!

## Issues
there is articles doesn't have some field because of speciale source of them. and we find `null` in these field.

# Automation of crawling
I am using windows as operation system i created a planified task to execute it every day at 17:00 on my local computer. 
the commende used is : `schtasks /create /tn My App /tr c:\apps\myapp.exe /sc daily /st 08:00 /ed 31/12/2021`
for crawling data i create a [bat file](./start_articles_crawling.bat) that activate the working virtual envirenment and start crawling data.

# Contact

khalil.laatiris@gmail.com
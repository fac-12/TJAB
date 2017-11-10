# Gif Us Clean Air!

## Why?

For our third week project we had to build a simple single page web app that queried two APIs and used the results to update the DOM.

## What?

We decided to use the [London Air Quality Api](https://www.londonair.org.uk/LondonAir/API/) to give us the latest daily results for air pollutants in each London borough.  Since it is quite hard to understand what the Air Quality index ratings mean, we wanted a gif to display from the [Giphy Api](https://developers.giphy.com) showing whether this was considered good or bad.

We wanted the user to be able to select the specific borough they wanted information for, they would then see the latest air quality index displayed for their borough, and the relevant gif.

## How?

With limited time, we focused on the functionality rather than the styling this week.

We spent a considerable amount of time deciding the software architecture.  

![](https://files.gitter.im/foundersandcoders/TJAB/r3pX/image.png)

This was extremely useful in guiding our work and helping us decide on how to divide work and prioritise tasks.

Firstly we worked on the requests to the two APIs:

### London Air Quality Api
* We could make a request to the API to receive daily monitoring information by London Borough. This returned a very big JSON object direct from their live database.  We had to do a great deal of work in extracting information that we could then use.  The London Borough object contained a great deal of information including an array of monitoring sites, each site then held an array of pollutants with related information including their index reading.

* We wrote a function that made a request to the API, then pulled out the array of sites, looped through it, and then looped through all the pollutants at each site.  We created a new object that contained the pollutants and  an array of their results from across all the monitoring sites in that London borough.  We then worked out the highest measured value from the individual pollutants results array, because it is winter and pollution is quite low but we wanted to show some variation. The empty object looked like this:
{
    "Nitrogen Dioxide": ,
    "Ozone": ,
    "PM10 Particulate": ,
    "PM2.5 Particulate": ,
    "Carbon Monoxide": ,
    "Sulphur Dioxide":  
  };

* We also wrote a function that worked out an average from all the ratings in the object, which informed which gif was displayed.

### Giphy

* We made a request to the Giphy API by requesting a random image filtered by one of three search terms. These search terms would depend on the results obtained by the London Air Quality API.

* We added a MPAA rating filter to our request so as to reduce the risk of displaying an inapporiate image.

### Updating the DOM

* We split the DOM manipulation javascript into 4 functions:
1. A function to add the event listeners to the dropdown menu, which would then call the London Air Quality API with the relevant borough code when clicked

2. A function to add the information we had extracted from the London Air API into the DOM.

3. A function to display the correct random Gif we had requested from the API

4. A function to display a colour rating for the borough based on our calculations

### Lessons learned

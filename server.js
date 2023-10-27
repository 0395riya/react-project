const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

// URL of the website you want to scrape
const targetUrl = 'https://www.naukri.com/jobs-in-noida';

axios.get(targetUrl)
  .then((response) => {
    // Load the HTML content into Cheerio
    const html = response.data;
    const $ = cheerio.load(html);
    // console.log('Link' , html);

    // Now you can use Cheerio to select and manipulate elements
    // on the page using jQuery-like syntax.

    // Example: Get the page title
    const jobs = []

    // Example: Get all the links on the page
    $('.content > section .list  article  .jobTupleHeader  ').each((index, element) => {
      const title = $(element).find('.info.fleft  a').text();
      const company = $(element).find('.info.fleft  .companyInfo.subheading  a').text();
    //   console.log('Link' , element);
    const store =  {title:title, company:company};
      jobs.push(store);
    
    
    });
    console.log('Link' , jobs);
    
  })
  .catch((error) => {
    console.error('Error fetching the page:', error);
  });
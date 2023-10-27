const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const { URL } = require('url');


const url = "https://salesprofessionals.co.in/search-jobs/";

// Function to scrape job information from an individual job URL
async function scrapeJobDetails(jobURL) {
  try {
    const res = await axios.get(jobURL);
    const $ = cheerio.load(res.data);

    // Extract job details from the page
    const title = $('.job-single-head2 .job-title2 h1').text().trim();
      const company = $('.col-lg-4.column .job-head-info h4').text().trim();
      // const company_location = $('.col-lg-4.column .job-head-info span').text().trim();
      const location = $('.job-single-head2 .tags-jobs li').text().trim();
      const skills = $('.job-single-head2 > span b').eq(0).text().trim();
      const job_discription = $('.job-details p').text().trim();
      const min_salary_selection = $('.job-overview li span').eq(0).text().trim();
      const min_salary = min_salary_selection.match(/\d+/)[0];
      const max_salary_selection = $('.job-overview li span').eq(0).text().trim();
      const max_salary = max_salary_selection.replace(/^\d+\s-\s/, '');
      const total_vacancy = $('.job-overview li span ').eq(1).text().trim();
      
      const industry = $('.job-overview li span').eq(3).text().trim();
      const min_exp_selection = $('.job-overview li span').eq(4).text().trim();
      const min_exp = min_exp_selection.match(/\d+/)[0];
      const max_exp_selection = $('.job-overview li span').eq(4).text().trim();
      const max_exp = max_exp_selection.replace(/^(\d+-)|\sYears/g, '');
      const role = $('.job-single-head2 > span > b').eq(1).text().trim();

    // Store or process the extracted data as needed
    const jobData = {
      title: title,
        location: location,
        company: company,
        // company_location: company_location,
        skills: skills,
        job_discription: job_discription,
        min_salary: min_salary,
        max_salary: max_salary,
        total_vacancy: total_vacancy,
        industry: industry,
        min_exp: min_exp,
        max_exp: max_exp,
        role: role
    };
    // console.log(jobData);
    return jobData;
    // You can save the data or perform other operations as required
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}

// Example usage:
// Replace jobURL with a specific job URL obtained from the list of job postings
async function scrapeJobsFromMainPage() {
  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    const jobURLs = [];

    $('.searchlist li a').each((index, element) => {
      const jobURL = $(element).attr('href');
      if (jobURL.includes('/jobs/')) {
        jobURLs.push(jobURL);
      }
    });

    const uniqueJobURLs = new Set();
    jobURLs.forEach((jobURL) => {
      const mainJobURL = jobURL.split('?')[0]; // Remove query parameters
      uniqueJobURLs.add(mainJobURL);
    });

    // Convert the Set back to an array
    const uniqueJobURLArray = Array.from(uniqueJobURLs);

    
    const jobDataList = await Promise.all(uniqueJobURLArray.map(scrapeJobDetails));

    console.log(jobDataList, 'asasa');

    // Save the data or perform other operations as required
    // fs.writeFile('jobsData.json', JSON.stringify(jobDataList), (err) => {
    //     if (err) throw err;
    //     console.log('Data saved!');
    // });
  } catch (err) {
    console.log("Error fetching main page:", err);
  }
}

scrapeJobsFromMainPage();
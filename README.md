# Senior Front End Task
> Outfittery - Team NRG

Hello! If you're looking at this repository, it means you're considering work at Outfittery, and that's awesome! Thank you for considering working with us!

So, this repository is a very simple-quick-and-dirty [Express](https://expressjs.com/) RESTful API to help you accomplish your Senior Front End task. Please don't consider the code as a representative example of code we usually write, this is just something we've put together so that you wouldn't need to spend time setting up a backend API on your own.

There certainly is a lot of room for improvement. During your coding task, if you find anything that needs improvement, feel free to do it. If you could let us know about such improvements, it'd actually be awesome, as that'd allow us to continuously improve and hire more awesome people like yourself :)

## Running the API

As with any regular Express app, after cloning the repo, just...

* `npm i` - to install the dependencies
* `npm start` - to, well, you know, start the app :)

Alternatively, you can also use `npm run dev`, in case you want to make any changes and have them automatically reloaded.

Once you've started the API, simply navigate to http://localhost:3000/ for an overview of the available endpoints and supported HTTP methods.

## What does this API expose?

As you may already know, your coding task is about delivering a calendar functionality, where the front end is responsible for displaying a list of available time slots for customers, and afterwards allowing customers to book an appointment with a stylist.

So, to support such a feature, this API exposes endpoints that list the available time slots and enables customers to book an appointment.

## Endpoints / Resources

If you perform a `GET http://localhost:3000/`, you should see that this API exposes 2 endpoints:

* `/timeslots`: supports only `GET` calls, enabling the listing of available time slots for booking an appointment.
* `/appointments`: `POST` calls to this endpoint enable the customer to book an appointment; `GET` calls return the booked appointments.

Please notice this API is quite "dumb", in the sense that if you retrieve the list of appointments and book one of them, the booked appointment **will not** be removed from the list of available appointments. If you feel like unleashing your inner hippogriff and improving this, go for it (but please remember your priority is finishing the task on time).

## Questions? Complaints? Suggestions?

As part of your recruiting process, you'll be invited to a Slack channel where you'll have access to everyone from our team, so, feel free to talk to us via Slack or drop us an e-mail :)

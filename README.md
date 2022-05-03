# Fran Albanese's Work Day Scheduler

Welcome to my work day scheduler project! This application will keep track of users' calendar events for the given day.

![Screen Shot 2022-04-22 at 1 42 46 AM](https://user-images.githubusercontent.com/98659683/164610928-806c920b-26eb-446f-94b7-918a4de17573.png)

## Features

- Dynamically updating date that will change based on the user's current computer time
- Input fields that can store as many items as the user needs

* Input fields that dynamically change background based on the current hour
  - Green represents future times
  - Gray represents times that are in the past
  - Red represents the current hour

- Save buttons next to each text field that saves the user's input until either a new input is given and saved or cleared
- A "Clear Schedule" button that clears the user's inputs all at once

## How to use the scheduler:

In order to use this application, the user will need to first click on an input field. They will then input their text. Once satisfied, the button next to the text field should be clicked to save the input.

When the input is saved, it is stored in the user's local storage. The functionality is designed so if the user closes or refreshes their browser tab, their responses will be saved and displayed.

To overwrite an input, the user must input new text into the respsective field and click the save button again.

If the user would like to clear the schedule, they can click the "Clear Schedule" button.

## Applicable Frameworks

- jQuery
- Bootstrap

## Credits

- Code author - Francesco Albanese
- Finished application - https://falbanese7.github.io/fran-albanese-day-planner/

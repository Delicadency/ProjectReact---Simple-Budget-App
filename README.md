# Simple Budget App
A simple budget-tracking application built with React. This app allows users to add, edit, and delete income and expense entries, calculate total income and expenses, and display a balance overview. Designed to make basic budgeting easy and straightforward.

Note: This project is a conversion of ProjectJS - Simple Budget App from vanilla JavaScript to React.

## Features
- **Add, edit, and delete entries:** Track individual income and expense entries, updating or removing them as needed.
- **Calculate totals:** Automatic calculation of total income, total expenses, and remaining balance.
- **Polish number formatting:** Supports Polish decimal format (comma as decimal separator).
- **Dynamic balance display:** Balance dynamically updates based on changes in income and expense totals.
- **Context API:** The app uses React Context to determine whether entries are processed as expenses or income.

## Installation
1. Clone the repository:

`
git clone https://github.com/Delicadency/ProjectReact---Simple-Budget-App.git
cd ProjectReact---Simple-Budget-App
`

2. Install dependencies:

`
npm install

`
3. Start the development server:

`
npm start
`

The application will open in your browser at http://localhost:3000.

## Usage
- **Add Entries:** Use the input fields to enter income or expenses. The application will validate the input format.
- **Edit or Delete Entries:** Each entry can be edited or removed as needed. Total values update accordingly.
- **View Balance:** The balance is shown in the header, representing the difference between total income and total expenses.

## Components Overview
### Main Components
**Header:** Displays the total balance based on income and expenses.
**TotalBalance:** Component responsible for calculating and displaying the overall balance.
**Main:** Contains sections for both income and expense entries.
**Section:** Handles input validation and updating totals for individual entries.
### Validation
- Input fields restrict values to a maximum of 7 digits before the decimal and 2 digits after.
- Numbers are displayed in the Polish format, with commas as decimal separators.
### Context API
The app uses React Context to set whether entries are treated as income or expenses, simplifying the management of these states across components.
### Customization
To modify the input validation logic, navigate to the Section component and adjust the regex or rules for the amount field. Similarly, for customization of layout or styles, modify the corresponding CSS files in the component folders.

## Contributing
Contributions are welcome! If you would like to improve the project, feel free to fork the repo, make changes, and open a pull request.

1. Fork the repository
2. Create a new branch (git checkout -b feature/YourFeature)
3. Commit your changes (git commit -m 'Add new feature')
4. Push to the branch (git push origin feature/YourFeature)
5. Open a pull request
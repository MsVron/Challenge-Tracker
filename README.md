#  Challenge Tracker

This is a simple web application called " Challenge Tracker" that allows users to track their daily  count. Users can add entries for each day, specifying the date and the number of s performed. The application will display a table showing the progress over time.

## Features

- Add a new  entry by providing the date and the number of s.
- Delete a  entry from the table.
- Automatically load existing entries from local storage when the page loads.
- Display the entries in a table format, showing the date and the number of s.
- Provide a default value of today's date for the date input field.
- Format the date display based on the entry's age:
  - If the entry is from today, display it as "Today".
  - If the entry is from yesterday, display it as "Yesterday".
  - If the entry is within the past week, display the weekday name followed by the date (e.g., "Monday (2023-07-03)").
  - Otherwise, display the full date.

## Usage

To use the  Challenge Tracker, follow these steps:

1. Open the `index.html` file in a web browser.
2. The web page will load, displaying the title "Push-Up Challenge Tracker" and a form to add new entries.
3. Fill in the "Date" field with the date of the  entry. This field is required.
4. Enter the number of s performed in the "Number of Push-Ups" field. This field is also required.
5. Click the "Add Entry" button to submit the form.
6. The table below the form will update to include the new entry, showing the date and the number of s performed.
7. To delete an entry, click the "Delete" button next to the entry in the table. The entry will be removed from the table and the local storage.
8. The table will update automatically when entries are added or deleted.
9. The date input field will be pre-filled with today's date when the page loads.
10. Existing entries from previous sessions will be loaded from local storage and displayed in the table.

## Technologies Used

The Challenge Tracker is built using the following technologies:

- HTML: Markup language for structuring the web page.
- CSS: Stylesheet language for styling the web page.
- JavaScript: Programming language for the interactive functionality of the web application.
- Local Storage: Browser feature for storing and retrieving data locally.

## Contributing

This project is open for contributions. If you have any ideas or improvements, feel free to submit a pull request or open an issue in the repository.

## License

The  Challenge Tracker is open source and released under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

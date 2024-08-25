document.addEventListener('DOMContentLoaded', function () {
        flatpickr('#custom-date-input', {
            dateFormat: "d F l",  // day month weekday
            onChange: function (selectedDates, dateStr, instance) {
                // Optional: Add any additional logic if needed
                console.log("Selected date:", dateStr);
            }
        });
    });
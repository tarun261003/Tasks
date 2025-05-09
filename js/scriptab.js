const typeSelect = document.getElementById("type");
const whenSection = document.getElementById("when-section");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const durationSpan = document.getElementById("duration");

// Default: start and end date same
startDateInput.valueAsDate = new Date();
endDateInput.valueAsDate = new Date();
calculateHours(); // Initial calculation

typeSelect.addEventListener("change", () => {
  if (typeSelect.value !== "") {
    whenSection.style.display = "block";
  } else {
    whenSection.style.display = "none";
  }
});

// Event Listeners for change in date inputs
[startDateInput, endDateInput].forEach((input) => {
  input.addEventListener("change", calculateHours);
});

function calculateHours() {
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);

  if (startDate > endDate) {
    durationSpan.textContent = "0";
    return;
  }

  let dayMilliseconds = 24 * 60 * 60 * 1000;
  let totalDays = Math.round((endDate - startDate) / dayMilliseconds) + 1;
  let workdays = 0;

  for (let i = 0; i < totalDays; i++) {
    const tempDate = new Date(startDate);
    tempDate.setDate(startDate.getDate() + i);
    const day = tempDate.getDay();
    if (day !== 0 && day !== 6) {
      workdays++;
    }
  }

  const totalHours = workdays * 8;
  durationSpan.textContent = totalHours;
}

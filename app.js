async function fetchAndDisplayTasks(courseId) {
  try {
      const response = await fetch(`/courses/${courseId}/tasks`);
      const tasks = await response.json();

      // Display tasks in the taskList div (you can customize this part)
      taskList.innerHTML = tasks.map(task => `
          <div>
              <p><strong>Task Name:</strong> ${task.taskName}</p>
              <p><strong>Due Date:</strong> ${task.dueDate}</p>
              <p><strong>Additional Details:</strong> ${task.additionalDetails}</p>
          </div>
      `).join('');
  } catch (error) {
      console.error(error);
  }
}

taskForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const courseId = document.getElementById('courseId').value;
  const taskName = document.getElementById('taskName').value;
  const dueDate = document.getElementById('dueDate').value;
  const additionalDetails = document.getElementById('additionalDetails').value;

  try {
      const response = await fetch(`/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              courseId,
              taskName,
              dueDate,
              additionalDetails,
          }),
      });

      if (response.ok) {
          console.log('Task submitted successfully');
          // Fetch and display tasks after submitting a new task
          await fetchAndDisplayTasks(courseId);
      } else {
          console.error('Error submitting task');
      }
  } catch (error) {
      console.error(error);
  }
});

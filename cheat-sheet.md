# 90-Day Sprint: Developer Cheat Sheet

## The Backend (Node & Express)
* **Node.js:** The environment that lets me run JavaScript on my computer instead of in a browser.
* **Express:** The framework that acts like a restaurant staff, making it easy to build a server.
* **req (Request):** The incoming order from the user/browser. Contains data about what they want.
* **res (Response):** What my server sends back to the user/browser.
* **req.params:** Grabbing a variable directly from the URL. 
  * Example: In the route `/users/:name`, if the URL is `/users/aditya`, then `req.params.name` equals `"aditya"`.
* **res.json():** Sending structured data back to the browser instead of plain text.

## Git & GitHub
* **git add .** -> Stages all my changed files to be saved.
* **git commit -m "msg"** -> Locks in the save with a descriptive message.
* **git push** -> Uploads the saved code to my live GitHub repository.
* **.gitignore:** A file that tells Git to ignore certain folders (like `node_modules`).
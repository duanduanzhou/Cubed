# Cubed Project
Overview

Value Proposition: Collaborate and build in 3D with ease.

Our team consists of: 

Krain C. | Designer & Mobile Developer 
Nicholas B. | Mobile & Web Developer
Nicholas V. | Designer & Augmented Reality Developer
Zoey Z. | Product Manager & Mobile Developer

Note from the team:

Coming from diverse backgrounds of computer science, graphic design and humanities, we all dove into this project with a mindset open to learning, encouragement, and growth. With each member at different points in their respective educational career, we understood the perspectives and tools that we could each bring to the table. Together, we embarked on this journey to solve a problem related to educational learning in virtual/augmented reality. And, despite having limited experience with VR/AR, we jumped right in with excitement. 
The following report summarizes our findings throughout the ten-week quarter and highlights the final product. What is not depicted, however, is the experience, fun, and interactions we all had with those related to the project. We’d like to extend a special thanks to all our interview participants that helped us along the way as well as our TA, Taylor L., for guiding us throughout this journey.

Central Problem and Solution

Mission Statement: Enable immersive learning through defying space.

Problem: Virtual learning can be difficult when you’re limited to video-calling or screen sharing in two-dimensions. Especially for abstract concepts or those that require complex visualizations, people have a hard time getting their point across, much less learning new topics or building on top of the work of teammates. 

Solution: Cubed aims to solve this problem by providing a workspace where you can efficiently demonstrate concepts and collaborate with others in 3D. Add shapes/objects, annotate, or draw in 3D to teach others through a “hands-on” experience. And, with augmented reality mode, users are able to view their creations right there in their space.

Final Prototype Implementation

Tools

We used React Native to build the application framework for the sign-in, document select screen, and profile page. Using React Native in combination with Expo Go allowed us to rapidly test our code and collaborate with one another easily as it allowed for cross-platform development. 

Nonetheless, when we attempted to program the augmented reality portion in React Native, we were met with a rude awakening as we found that AR support in React Native was limited. We found brief success with packages such as ViroReact; however, this success was short-lived as we would learn that the test-bed for it was difficult to work with. More importantly, it was not compatible with several React Native packages.

Ultimately, we decided to program in swift using ARKit + Scenekit. This allowed us to quickly test our code on an Apple Device and successfully complete the AR portion. As a result of this choice, however, this also meant that we could not complete cross-platform development. 

Wizard of Oz

For the augmented reality editor, we provided the option for the user to add a collaborator to the workspace. While a user was allowed to work through the complete flow of the task, the confirmation and adding the user is purely a visual element and does not enable the user to join and collaborate within the workspace.

Hard-Coded Data

For the document select screen, the size of the icons and images is hard coded. To improve these features we should use dimension functions to read the screen sizes of the devices such that this app will have proper image sizes for multiple devices and platforms.

For the augmented reality editor, we hard-coded the options of the tools such as the image, drawing tool, and 3D object editor. This allowed the user to experiment with these tools but also meant they could not experience the full functionality and breadth of each tool. Furthermore, in the version history screen, we only allowed the user to select one edit backwards as we were not able to implement saving state data past one step.

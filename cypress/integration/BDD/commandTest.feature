Feature: Demoblaze Ecommerce test validation​
 Application regression​
@regression @smoke

Scenario: Validate logim with valid credentials
Given I open demoblaze Ecommerce website
When I click the login Button
Then I enter a valid Username
When I entered a Valid password
Then I click on sign in Button
When I Validate successful login to my account
# Install Cucumber JS allure
# https://www.npmjs.com/package/allure-cucumberjs
# https://github.com/allure-framework/allure-js
# https://github.com/allure-framework/allure-js/blob/master/packages/allure-cucumberjs/README.md

# Feature: First Test

# Scenario: Breaker guesses a word
#   Given the Maker has chosen a word
#   When the Breaker makes a guess
#   Then the Maker is asked to score

@ui-tests4
Feature: Select book element into Demoqa

#  Background: Select Elements option in home page
#      Given the user selects the Elements option

@testBook

Scenario: Select Elements option books

    Given the user clicks the add button form
    And the user clicks the book
    And the user clicks the Login button
    Given the user sets the user
    And the user sets the password
    When the user clicks the Login button1
    Then the user clicks the AddYourCollection button


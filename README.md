# README

## How to run this on your machine:

1. Clone this repository

2. run `bundle` to install ruby dependencies

3. run `yarn` to install js dependencies

4. setup a postgres database server and run `rails db:create`

5. run the server: `./bin/webpack-dev-server` (the js asset server) and `rails s` (the html server)

6. optionally you can deploy this to heroku (first install node js as a buildpack: `heroku buildpacks:add --index 1 heroku/nodej`)
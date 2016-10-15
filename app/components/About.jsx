var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return  (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application built on React. I have built this for the
        Complete React Web App Developer Course.
      </p>

      <p>Here are relevant links:</p>
      <ul>
        <li>
          <a href='//github.com/Makdash49/ReactWeather'>ReactWeather</a> -
            This is the repo in GitHub.
        </li>
        <li>
          <a href='//openweathermap.org/'>Open Weather Map</a> - I used Open
            Weather Map to search for weather data by city name.

        </li>
      </ul>
    </div>
  )
};

module.exports = About;

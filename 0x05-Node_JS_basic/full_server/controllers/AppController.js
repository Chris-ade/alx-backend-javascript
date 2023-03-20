/**
 * Contains the miscellaneous route handlers.
 * @author Chris Adebiyi <https://github.com/Chris-ade>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

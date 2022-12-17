const colors = require('colors/safe');

const NAME_WEB = 'gestioCal:';

const logLogin = (user) => {
  const currentData = new Date();
  
  console.log(
    colors.green(NAME_WEB),
    colors.white('LOGIN -'),
    colors.green('Login for'),
    colors.bold(user),
    colors.green(`at ${currentData.toLocaleString()}`)
  );
};
const logGet = ({ object }) => {
  const currentData = new Date();
  
  console.log(
    colors.green(NAME_WEB),
    colors.white('GET -'),
    colors.green(`Get data of ${object} at ${currentData.toLocaleString()}`)
  );
};
const logCreate = ({ object, id }) => {
  const currentData = new Date();
  
  console.log(
    colors.green(NAME_WEB),
    colors.white('CREATE -'),
    colors.green(`Creation of ${object} at ${currentData.toLocaleString()} with id:`),
    colors.bold(id)
  );
};
const logErrorCreate = ({ object }) => {
  const currentData = new Date();
  
  console.log(
    colors.green(NAME_WEB),
    colors.red('ERROR CREATE -'),
    colors.green(`Error of ${object} at ${currentData.toLocaleString()}`)
  );
};
const logUpdate = ({ object, id }) => {
  const currentData = new Date();
  
  console.log(
    colors.green(NAME_WEB),
    colors.white('UPDATE -'),
    colors.green(`Update of ${object} at ${currentData.toLocaleString()} with id:`),
    colors.bold(id)
  );
};
const logErrorUpdate = ({ object }) => {
  const currentData = new Date();
  
  console.log(
    colors.green(NAME_WEB),
    colors.red('ERROR UPDATE -'),
    colors.green(`Error of ${object} at ${currentData.toLocaleString()}`)
  );
};
const logDelete = ({ object, id }) => {
  const currentData = new Date();
  
  console.log(
    colors.green(NAME_WEB),
    colors.white('DELETE -'),
    colors.green(`Delete of ${object} at ${currentData.toLocaleString()} with id:`),
    colors.bold(id)
  );
};
const logErrorDelete = ({ object }) => {
  const currentData = new Date();
  
  console.log(
    colors.green(NAME_WEB),
    colors.red('ERROR DELETE -'),
    colors.green(`Error of ${object} at ${currentData.toLocaleString()}`)
  );
};

module.exports = {
  logLogin, logCreate, logErrorCreate,
  logUpdate, logErrorUpdate, logGet,
  logDelete, logErrorDelete
};
// Single responsiblity principle means that every module, class or function must have only one reason to change
// Example

// Code below written withou SRP
// So we can't easily reuse methods that are in the class
class Training {
  start() {
    // start training logic
  }

  calculateWeight() {
    // calculate all weights that person lifted
  }

  notifyAboutStart() {
    // send mail logic
  }

  end() {
    // end training logic
  }
}

// What we can do instead is to separate methods into classes or functions .

class StartTraining {
  start() {
    // start training logic
  }
}

class CalculateWeightTraining {
  calculateWeight() {
    // start training logic
  }
}

class NotifyAboutTrainingStart {
  notifyAboutStart() {
    // calculate all weights that person lifted
  }
}

class EndTraining {
  end() {
    // end training logic
  }
}

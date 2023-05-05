const Form = require("../models/form");


exports.createRegistrationForm = async (req, res) => {
  try {

    const { values} = req.body;

    let forms = await Form.create(values);

    res.status(200).json({
      success: true,
      forms
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getAllUserDetails = async (req, res) => {
  try {
    const allUsers = await Form.find()

    res.status(200).json({
      success: true,
      allUsers
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const FoodModule = require("../models/foodsModule");

exports.getFoods = async (req, res) => {
  try {
    const allFoods = await FoodModule.find();

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.addFoods = (req, res) => {
  const {
    foodID,
    name,
    image,
    price,
    type,
    likeCount,
    description,
    insertUser,
    insertDate,
    updateDate,
  } = req.body;

  const newFood = new FoodModule({
    foodID,
    name,
    type,
    image,
    price,
    likeCount,
    description,
    insertUser,
    insertDate,
    updateDate,
  });

  newFood
    .save()
    .then(() => {
      res.json("Food Added");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: error.message });
    });
};

exports.updateFoods = async (req, res) => {
  let foodId = req.params.id;
  const {
    foodID,
    name,
    image,
    price,
    type,
    likeCount,
    description,
    insertUser,
  } = req.body;

  const updateFood = {
    foodID,
    name,
    image,
    type,
    price,
    likeCount,
    description,
    insertUser,
  };

  //Metana findBiId dmmoth vada kranava findOneAndUpdate dmmama vda na.
  const update = await FoodModule.findOneAndUpdate(foodId, updateFood)
    .then(() => {
      res.status(200).send({ status: "Food updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating food", error: err.message });
    });
};

exports.deleteFoods = (req, res) => {
  let foodID = req.params.id;

  //metana danne column name eka  : value eka
  FoodModule.findOneAndRemove({ foodID: foodID }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
      res.json({
        message: "Food Deleted",
      });
    }
  });
};

exports.getbyId = (req, res) => {
  let foodID = req.params.id;

  const food = FoodModule.findOne({ foodID: foodID }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.send(post);
    }
  });
};

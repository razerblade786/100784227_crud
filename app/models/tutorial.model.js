module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      date: String,
      length: String,
      intensity: String,
      description: String,
      weight: String,
      musclegrp: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};

module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caracteristicasFisicas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ultimoLocalVisto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contatoNome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contatoTelefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recompensa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });

  return Pet;
};
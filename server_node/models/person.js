module.exports =(sequelize, DataTypes) => {
    return sequelize.define('person', {
        num: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: true,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(20),
            allowNull: true,
            unique: true,
        },
    }, {
        timestamps: true,
    });
};
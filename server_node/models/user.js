module.exports =(sequelize, DataTypes) => {
    //.define('테이블명',{ 속성명{ 속성값}....}
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        average: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
        },
    }, {
        timestamps: true,
    });
};
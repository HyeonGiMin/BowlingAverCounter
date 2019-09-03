module.exports =(sequelize, DataTypes) => {
    //.define('테이블명',{ 속성명{ 속성값}....}
    return sequelize.define('gamelist', {
        score: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            unique: true,
        }
    }, {
        timestamps: true,
    });
};
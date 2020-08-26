// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_App_Vaa_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Cities
      * ------------------------------------
      */
    class Cities extends Sequelize.Model{}
    Cities.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "cities", timestamps: false }
    );



    /**
      * ------------------------------------
      * Classes
      * ------------------------------------
      */
    class Classes extends Sequelize.Model{}
    Classes.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      days: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      vacancies: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      //RELATIONS
        
        
        
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _class: {
        type: Sequelize.INTEGER,
        references: {
          model: Clubs,
          key: '_id',
        }
      },
      _classes: {
        type: Sequelize.INTEGER,
        references: {
          model: Students,
          key: '_id',
        }
      },
      _classes: {
        type: Sequelize.INTEGER,
        references: {
          model: Teachers,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "classes", timestamps: false }
    );



    /**
      * ------------------------------------
      * Clubs
      * ------------------------------------
      */
    class Clubs extends Sequelize.Model{}
    Clubs.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      canoe_oc1: {
        type: Sequelize.FLOAT
      },
      
      canoe_oc2: {
        type: Sequelize.FLOAT
      },
      
      canoe_oc6: {
        type: Sequelize.FLOAT
      },
      
      canoe_oc6_7: {
        type: Sequelize.FLOAT
      },
      
      canoe_v1: {
        type: Sequelize.FLOAT
      },
      
      canoe_v3: {
        type: Sequelize.FLOAT
      },
      
      canoe_v6: {
        type: Sequelize.FLOAT
      },
      
      city: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      country: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      number: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      schedule: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      state: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      street: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      _class:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Classes",
          key: '_id',
        },
      },
        
        
        
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _club: {
        type: Sequelize.INTEGER,
        references: {
          model: Classes,
          key: '_id',
        }
      },
      _clubs: {
        type: Sequelize.INTEGER,
        references: {
          model: Events,
          key: '_id',
        }
      },
      _clubs: {
        type: Sequelize.INTEGER,
        references: {
          model: Students,
          key: '_id',
        }
      },
      _clubs: {
        type: Sequelize.INTEGER,
        references: {
          model: Teachers,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "clubs", timestamps: false }
    );



    /**
      * ------------------------------------
      * Countries
      * ------------------------------------
      */
    class Countries extends Sequelize.Model{}
    Countries.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "countries", timestamps: false }
    );



    /**
      * ------------------------------------
      * Events
      * ------------------------------------
      */
    class Events extends Sequelize.Model{}
    Events.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      vacancies: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "events", timestamps: false }
    );



    /**
      * ------------------------------------
      * States
      * ------------------------------------
      */
    class States extends Sequelize.Model{}
    States.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "states", timestamps: false }
    );



    /**
      * ------------------------------------
      * Students
      * ------------------------------------
      */
    class Students extends Sequelize.Model{}
    Students.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      date_of_birth: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      facebook: {
        type: Sequelize.STRING
      },
      
      instagram: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      position_secundary: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      position_usual: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      steer: {
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _student: {
        type: Sequelize.INTEGER,
        references: {
          model: Classes,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "students", timestamps: false }
    );



    /**
      * ------------------------------------
      * Teachers
      * ------------------------------------
      */
    class Teachers extends Sequelize.Model{}
    Teachers.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      auth_classes_students: {
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      
      date_of_birth: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      partner: {
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      _classes:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Classes",
          key: '_id',
        },
      },
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _teacher: {
        type: Sequelize.INTEGER,
        references: {
          model: Clubs,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "teachers", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    Classes.belongsToMany(Clubs, {
        through: "Classes__club",
        as: "_club",
        foreignKey: "id_Classes",
        otherKey: "id_Clubs",
        timestamps: false
    });

    Classes.belongsToMany(Students, {
        through: "Classes__student",
        as: "_student",
        foreignKey: "id_Classes",
        otherKey: "id_Students",
        timestamps: false
    });

    
    Clubs.belongsToMany(Teachers, {
        through: "Clubs__teacher",
        as: "_teacher",
        foreignKey: "id_Clubs",
        otherKey: "id_Teachers",
        timestamps: false
    });

    
    
    Events.belongsToMany(Clubs, {
        through: "Events__clubs",
        as: "_clubs",
        foreignKey: "id_Events",
        otherKey: "id_Clubs",
        timestamps: false
    });

    
    
    Students.belongsToMany(Classes, {
        through: "Students__classes",
        as: "_classes",
        foreignKey: "id_Students",
        otherKey: "id_Classes",
        timestamps: false
    });

    Students.belongsToMany(Clubs, {
        through: "Students__clubs",
        as: "_clubs",
        foreignKey: "id_Students",
        otherKey: "id_Clubs",
        timestamps: false
    });

    
    Teachers.belongsToMany(Clubs, {
        through: "Teachers__clubs",
        as: "_clubs",
        foreignKey: "id_Teachers",
        otherKey: "id_Clubs",
        timestamps: false
    });

    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};

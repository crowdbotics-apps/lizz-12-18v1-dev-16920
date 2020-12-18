import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen315933Navigator from '../features/BlankScreen315933/navigator';
import BlankScreen215931Navigator from '../features/BlankScreen215931/navigator';
import BlankScreen115930Navigator from '../features/BlankScreen115930/navigator';
import BlankScreen015929Navigator from '../features/BlankScreen015929/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen315933: { screen: BlankScreen315933Navigator },
BlankScreen215931: { screen: BlankScreen215931Navigator },
BlankScreen115930: { screen: BlankScreen115930Navigator },
BlankScreen015929: { screen: BlankScreen015929Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

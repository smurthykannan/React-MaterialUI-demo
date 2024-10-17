import { Breadcrumbs } from "@mui/material";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; 
import { MUIAccordian } from "./components/MUIAccordian";
import { MUIAutoComplete } from "./components/MUIAutoComplete";
import { MUIButton } from "./components/MUIButton";
import { MUICard } from "./components/MUICard";
import { MUICheckBox } from "./components/MUICheckBox";
import { MUIImageList } from "./components/MUIImageList";
import { MUILayout } from "./components/MUILayout";
import { MUILink } from "./components/MUILink";
import { MUINavBar } from "./components/MUINavBar";
import { MUIRadioButton } from "./components/MUIRadioButton";
import MUIRating from "./components/MUIRating";
import { MUISelect } from "./components/MUISelect";
import MUISwitch from "./components/MUISwitch";
import { MUITextField } from "./components/MUITextField";
import { MUITypography } from "./components/MUITypography";
import { MUIBreadCrumbs } from "./components/MUIBreadCrumbs";
import { MUIDrawer } from "./components/MUIDrawer";
import { MUISpeedDial } from "./components/MUISpeedDial";
import { MUIBottomNavigation } from "./components/MUIBottomNavigation";
import { MUIAvatar } from "./components/MUIAvatar";
import { MUIBadge } from "./components/MUIBadge";
import { MUIList } from "./components/MUIList";
import { MUIChips } from "./components/MUIChips";
import { MUIToolTip } from "./components/MUIToolTip";
import { MUITable } from "./components/MUITable";
import { MUIAlert } from "./components/MUIAlert";
import { MUISnackbar } from "./components/MUISnackbar";
import { MUIDialog } from "./components/MUIDialog";
import { MUIProgress } from "./components/MUIProgress";
import { MUISkeleton } from "./components/MUISkeleton";
import { MUILoadingButton } from "./components/MUILoadingButton";
// import { MUIPicker } from "./components/MUIPicker";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      {/* <MUITypography /> */}
      {/* <MUIButton /> */}
      {/* <MUITextField /> */}
      {/* <MUISelect/> */}
      {/* <MUIRadioButton /> */}
      {/* <MUICheckBox /> */}
      {/* <MUISwitch /> */}
      {/* <MUIRating/> */}
      {/* <MUIAutoComplete/> */}
      {/* <MUILayout /> */}
      {/* <MUICard /> */}
      {/* <MUIAccordian /> */}
      {/* <MUIImageList /> */}
      {/* run the components with MUINavBar - MUILink, MUIBreadCrumbs, MUIDrawer */}
      {/* <MUINavBar /> */}
      {/* <MUILink />  */}
      {/* <MUIBreadCrumbs />  */}
      {/* <MUIDrawer /> */}
      {/* <MUISpeedDial /> */}
      {/* <MUIBottomNavigation /> */}
      {/* <MUIAvatar /> */}
      {/* <MUIBadge/> */}
      {/* <MUIList /> */}
      {/* <MUIChips /> */}
      {/* <MUIToolTip /> */}
      {/* <MUITable /> */}
      {/* <MUIAlert /> */}
      {/* <MUISnackbar /> */}
      {/* <MUIDialog/> */}
      {/* <MUIProgress /> */}
      {/* <MUISkeleton /> */}
      <MUILoadingButton />
      {/* <MUIPicker /> */}
    </div>
    </LocalizationProvider>
  );
}

export default App;

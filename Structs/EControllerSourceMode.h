typedef enum EControllerSourceMode
{
    k_EControllerSourceModeNone = 0, // none
    k_EControllerSourceModeDpad, // dpad
    k_EControllerSourceModeButtons, // buttons
    k_EControllerSourceModeFour_buttons, // four_buttons
    k_EControllerSourceModeAbsolute_mouse, // absolute_mouse
    k_EControllerSourceModeRelative_mouse, // relative_mouse
    k_EControllerSourceModeJoystick_move, // joystick_move
    k_EControllerSourceModeJoystick_mouse, // joystick_mouse
    k_EControllerSourceModeJoystick_camera, // joystick_camera
    k_EControllerSourceModeScrollwheel, // scrollwheel
    k_EControllerSourceModeTrigger, // trigger
    k_EControllerSourceModeTouch_menu, // touch_menu
    k_EControllerSourceModeMouse_joystick, // mouse_joystick
    k_EControllerSourceModeMouse_region, // mouse_region
    k_EControllerSourceModeRadial_menu, // radial_menu
    k_EControllerSourceModeSingle_button, // single_button
    k_EControllerSourceModeSwitches, // switches
} EControllerSourceMode;

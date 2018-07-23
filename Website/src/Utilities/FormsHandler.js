const FormsHandler = {

    /**
     * @param {component} component - The component which holds the form state
     * @param {event} event - The event from the target control
     */
    handleChange: function (component, event) {
        const target = event.target;
        let obj = component.state.model;
        obj[target.name] = (target.type === 'checkbox' ? target.checked : target.value);
        component.setState({
            model: obj
        });
    },
  
    /**
     * @param {component} component - The component which holds the tab state
     * @param {tab} tab - The tab that is selected
     */
    toggleTab: function (component, tab) {
        if (component.state.activeTab !== tab) {
            component.setState({
                activeTab: tab
            });
        }
    },
  
  }
  export default FormsHandler;
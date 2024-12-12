const { Button, Text, hubspot } = require('@hubspot/ui-extensions');

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({{ context }}) => {
    return (
        <Button>
            Hello World
        </Button>
    );
});

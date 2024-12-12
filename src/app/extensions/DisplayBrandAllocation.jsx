import { Link, Button, Text, Box, Flex, hubspot } from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ actions }) => <Extension openIframe={actions.openIframeModal} />);

// Define the Extension component, taking in openIframe as a prop
const Extension = ({ openIframe }) => {
  const handleClick = () => {
    openIframe({
      uri: "https://hubspot-brands.onrender.com/allocation-form",
      height: 600,
      width: 500,
      title: 'Brand Allocation',
      flush: true,
    });
  };

  return (
    <>
      <Flex direction="column" align="start" gap="medium">
        <Text>
          Click the button below to allocate agents between brands.
        </Text>
        <Box>
          <Button type="submit" onClick={handleClick}>
            Allocate Brands
          </Button>
        </Box>
      </Flex>
    </>
  );
};

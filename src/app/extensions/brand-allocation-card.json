const { Link, Button, Text, Box, Flex, hubspot } = require("@hubspot/ui-extensions");

hubspot.extend((context) => {
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
      <Box>
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
      </Box>
    );
  };

  return <Extension openIframe={context.actions.openIframeModal} />;
});

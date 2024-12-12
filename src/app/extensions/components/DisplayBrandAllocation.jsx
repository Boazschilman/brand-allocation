import { Link, Button, Text, Box, Flex, hubspot } from "@hubspot/ui-extensions";

hubspot.extend(({ actions }) => <Extension openIframe={actions.openIframeModal} />);

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

const { Button, Box, Text, hubspot } = require("@hubspot/ui-extensions");

hubspot.extend(({ actions }) => {
  const handleClick = () => {
    actions.openIframeModal({
      uri: "https://hubspot-brands.onrender.com/allocation-form",
      height: 600,
      width: 500,
      title: 'Brand Allocation'
    });
  };

  return (
    <Box>
      <Text>Click to allocate agents between brands</Text>
      <Button onClick={handleClick}>
        Allocate Brands
      </Button>
    </Box>
  );
});

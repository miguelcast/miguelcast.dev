import * as React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { motion } from 'framer-motion';

import { theme } from '../../styles/themes/base';
import Box from '../System/Box';
import Tag from "../System/Tag";
import Text from "../System/Text";
import Button from "../System/Button";

const language = 'javascript';
const colorBg = theme.colors.primary + '48';
const colorsStack = [
  '#48090935',
  '#640E0E35',
  '#87202035',
  '#EA343435',
  '#ec792035',
  '#e2da2335',
];
const activeLineStyle = {
  backgroundColor: colorBg,
  borderRadius: 5,
  paddingRight: 12,
  paddingBottom: 4,
  paddingTop: 4
};

function CallStack({ code, stack, steps }) {
  const [step, setStep] = React.useState(0);

  function nextStep() {
    const stepLength = steps.length - 1;
    setStep(prevStep => prevStep >= stepLength ? stepLength : prevStep + 1);
  }

  function prevStep() {
    setStep(prevStep => prevStep <= 0 ? 0 : prevStep - 1);
  }

  function resetStep() {
    setStep(0);
  }

  const currentLine = steps?.[step]?.line || 0;
  const currentStack = steps?.[step]?.stack;

  return (
    <Box display="grid" gridRow={1} gridTemplateColumns="1.5fr 1fr" gridColumnGap={12}>
      <Tag position='absolute'>
        Code
      </Tag>
      <Box>
        <SyntaxHighlighter
          wrapLines
          showLineNumbers
          lineProps={(lineNumber) => {
            const style = activeLineStyle;
            return lineNumber === currentLine ? { style } : {};
          }}
          language={language}
          style={atomDark}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
      <Box alignItems="stretch" position='relative' p={2}>
        <Tag position='absolute' top={0} left={0}>
          Call Stack
        </Tag>
        <Box
          display="flex"
          flexDirection="column-reverse"
          justifyContent="flex-start"
          bg="grays.700"
          p={4}
          height='100%'
          borderRadius={1}
        >
          {currentStack?.map((key, index) => {
            return (
              <Box
                key={key}
                as={motion.div}
                initial={{ opacity: 0, translateY: -40, translateX: -20, rotate: -6 }}
                animate={{ opacity: 1, translateY: 0, translateX: 0, rotate: 0 }}
                exit={{ opacity: 0, translateY: -40, translateX: 20, rotate: 6 }}
                bg={colorsStack[index]}
                px={2}
                borderRadius={1}
                mt={1}
              >
                <SyntaxHighlighter
                  language={language}
                  style={atomDark}
                  showLineNumbers
                  startingLineNumber={stack?.[key].line}
                >
                  {stack?.[key].name}
                </SyntaxHighlighter>
              </Box>
            )
          })}
        </Box>
      </Box>
      {steps?.[step]?.description && (
        <Box
          gridColumn="1/3"
          display="flex"
          bg="grays.700"
          p={3}
          pt={5}
          mt={2}
          mb={2}
          mr={1}
          borderRadius={1}
          position='relative'
        >
          <Tag position='absolute' top={-10} left={0}>
            Descripción | Paso {step + 1}
          </Tag>
          <Text p={0} m={0} color="white">{steps?.[step]?.description}</Text>
        </Box>
      )}
      <Box display="flex" alignItems="center">
        <Button px={3} py={1} mr={3} fontSize={3} onClick={resetStep}>
          Reset
        </Button>
        <Button variant="link" px={3} py={1} mr={3} fontSize={3} onClick={prevStep}>
          <FiSkipBack size={24} />
        </Button>
        <Text p={0} m={0} mx={4} fontVariantNumeric="tabular-nums">
          {`${step + 1}/${steps.length}`}
        </Text>
        <Button variant="link" px={3} py={1} mr={3} fontSize={3} onClick={nextStep}>
          <FiSkipForward size={24} />
        </Button>
      </Box>
    </Box>
  );
}

export default CallStack;

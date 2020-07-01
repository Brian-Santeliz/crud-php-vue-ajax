
CREATE TABLE `registro` (
  `RegistroID` int(11) NOT NULL,
  `RegistroNombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `RegistroApellido` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;



ALTER TABLE `registro`
  ADD PRIMARY KEY (`RegistroID`);



ALTER TABLE `registro`
  MODIFY `RegistroID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

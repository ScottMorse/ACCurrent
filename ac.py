import numpy as np
from time import time

def ac(amplitude=110,frequency=60,seconds=2,phases=3,phase_degrees=120):
    
    time_stamp = time()
    second_position = time_stamp / 1000 - int(time_stamp / 1000)

    phase_radians = phase_degrees * (np.pi/180)

    points = []

    for phase in range(phases):
        points.append(amplitude * (np.sin(2 * np.pi * second_position * frequency + (phase * phase_radians))))
    
    return points
